import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getBranchOpenStatus,
  generateBookingCode,
  formatDiscreetNotification,
  validateBookingInput,
  getRecommendedPaymentMethods,
  filterTimelineEvents,
  filterDoctors,
} from './hospital-logic';

test('Mogadishu branch respects exact Google Places EAT hours', () => {
  // Monday 07:15 EAT = 04:15 UTC -> Closed (opens 07:30 on Monday)
  const monEarly = new Date('2026-11-16T04:15:00Z');
  assert.equal(getBranchOpenStatus('mogadishu', monEarly).isOpen, false);

  // Monday 07:30 EAT = 04:30 UTC -> Open
  const monOpen = new Date('2026-11-16T04:30:00Z');
  assert.equal(getBranchOpenStatus('mogadishu', monOpen).isOpen, true);

  // Tuesday 07:15 EAT = 04:15 UTC -> Open (opens 07:00 Tue-Thu)
  const tueOpen = new Date('2026-11-17T04:15:00Z');
  assert.equal(getBranchOpenStatus('mogadishu', tueOpen).isOpen, true);

  // Friday 10:00 EAT = 07:00 UTC -> Closed all day
  const fridayNoon = new Date('2026-11-20T07:00:00Z');
  assert.equal(getBranchOpenStatus('mogadishu', fridayNoon).isOpen, false);
  assert.match(getBranchOpenStatus('mogadishu', fridayNoon).hoursTodayLabel.en, /Closed/);

  // Saturday 17:00 EAT = 14:00 UTC -> Closed at 5 PM
  const satClose = new Date('2026-11-21T14:00:00Z');
  assert.equal(getBranchOpenStatus('mogadishu', satClose).isOpen, false);
});

test('Discreet Privacy Mode masks sensitive clinical condition names', () => {
  const code = generateBookingCode('2026-11-21-test');
  assert.match(code, /^AMR-\d{4}$/);

  const discreetMsg = formatDiscreetNotification(
    {
      branchId: 'hargeisa',
      serviceName: 'EDV & Male Urology',
      appointmentDate: '2026-11-21',
      timeSlot: '10:00 AM',
      discreetMode: true,
    },
    code,
    'en'
  );
  assert.equal(discreetMsg.includes('EDV'), false);
  assert.equal(discreetMsg.includes('Urology'), false);
  assert.equal(discreetMsg.includes(code), true);

  const standardMsg = formatDiscreetNotification(
    {
      branchId: 'hargeisa',
      serviceName: 'EDV & Male Urology',
      appointmentDate: '2026-11-21',
      timeSlot: '10:00 AM',
      discreetMode: false,
    },
    code,
    'en'
  );
  assert.equal(standardMsg.includes('EDV & Male Urology'), true);
});

test('Booking validation rejects Friday appointments and invalid phone numbers', () => {
  const invalidFriday = validateBookingInput(
    {
      branchId: 'mogadishu',
      serviceId: 'fertility',
      appointmentDate: '2026-11-20', // Friday
      timeSlot: '09:00 AM',
      patientName: 'Axmed',
      phone: '+252 61 444 5914',
      paymentMethod: 'evc_plus',
    },
    'en'
  );
  assert.equal(invalidFriday.valid, false);
  assert.ok(invalidFriday.errors.appointmentDate);

  const invalidPhone = validateBookingInput(
    {
      branchId: 'hargeisa',
      serviceId: 'edv',
      appointmentDate: '2026-11-21', // Saturday
      timeSlot: '10:30 AM',
      patientName: 'F.A.',
      phone: '123',
      paymentMethod: 'zaad',
    },
    'so'
  );
  assert.equal(invalidPhone.valid, false);
  assert.ok(invalidPhone.errors.phone);

  const validBooking = validateBookingInput(
    {
      branchId: 'hargeisa',
      serviceId: 'edv',
      appointmentDate: '2026-11-21',
      timeSlot: '10:30 AM',
      patientName: 'F.A.',
      phone: '063 877 7953',
      paymentMethod: 'zaad',
    },
    'so'
  );
  assert.equal(validBooking.valid, true);
});

test('Payment recommendations & filters work accurately', () => {
  assert.deepEqual(getRecommendedPaymentMethods('mogadishu'), ['evc_plus', 'edahab', 'card']);
  assert.deepEqual(getRecommendedPaymentMethods('hargeisa'), ['zaad', 'edahab', 'card']);

  const events = [
    { id: '1', category: 'mogadishu' as const },
    { id: '2', category: 'hargeisa' as const },
    { id: '3', category: 'technology' as const },
  ];
  assert.equal(filterTimelineEvents(events, 'all').length, 3);
  assert.equal(filterTimelineEvents(events, 'hargeisa').length, 1);

  const docs = [
    { id: 'd1', branchId: 'hargeisa' as const },
    { id: 'd2', branchId: 'mogadishu' as const },
  ];
  assert.equal(filterDoctors(docs, 'mogadishu').length, 1);
});
