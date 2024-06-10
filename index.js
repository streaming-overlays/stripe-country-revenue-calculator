const fs = require('fs');
const csv = require('csv-parser');

// Update with the path to your CSV file
const filePath = './unified_payments.csv';

const countryFlags = {
  AF: '🇦🇫',
  AL: '🇦🇱',
  DZ: '🇩🇿',
  AD: '🇦🇩',
  AO: '🇦🇴',
  AG: '🇦🇬',
  AR: '🇦🇷',
  AM: '🇦🇲',
  AU: '🇦🇺',
  AT: '🇦🇹',
  AZ: '🇦🇿',
  BS: '🇧🇸',
  BH: '🇧🇭',
  BD: '🇧🇩',
  BB: '🇧🇧',
  BY: '🇧🇾',
  BE: '🇧🇪',
  BZ: '🇧🇿',
  BJ: '🇧🇯',
  BT: '🇧🇹',
  BO: '🇧🇴',
  BA: '🇧🇦',
  BW: '🇧🇼',
  BR: '🇧🇷',
  BN: '🇧🇳',
  BG: '🇧🇬',
  BF: '🇧🇫',
  BI: '🇧🇮',
  CV: '🇨🇻',
  KH: '🇰🇭',
  CM: '🇨🇲',
  CA: '🇨🇦',
  CF: '🇨🇫',
  TD: '🇹🇩',
  CL: '🇨🇱',
  CN: '🇨🇳',
  CO: '🇨🇴',
  KM: '🇰🇲',
  CG: '🇨🇬',
  CD: '🇨🇩',
  CR: '🇨🇷',
  HR: '🇭🇷',
  CU: '🇨🇺',
  CY: '🇨🇾',
  CZ: '🇨🇿',
  DK: '🇩🇰',
  DJ: '🇩🇯',
  DM: '🇩🇲',
  DO: '🇩🇴',
  EC: '🇪🇨',
  EG: '🇪🇬',
  SV: '🇸🇻',
  GQ: '🇬🇶',
  ER: '🇪🇷',
  EE: '🇪🇪',
  SZ: '🇸🇿',
  ET: '🇪🇹',
  FJ: '🇫🇯',
  FI: '🇫🇮',
  FR: '🇫🇷',
  GA: '🇬🇦',
  GM: '🇬🇲',
  GE: '🇬🇪',
  DE: '🇩🇪',
  GH: '🇬🇭',
  GR: '🇬🇷',
  GD: '🇬🇩',
  GT: '🇬🇹',
  GN: '🇬🇳',
  GW: '🇬🇼',
  GY: '🇬🇾',
  HT: '🇭🇹',
  HN: '🇭🇳',
  HU: '🇭🇺',
  IS: '🇮🇸',
  IN: '🇮🇳',
  ID: '🇮🇩',
  IR: '🇮🇷',
  IQ: '🇮🇶',
  IE: '🇮🇪',
  IL: '🇮🇱',
  IT: '🇮🇹',
  JM: '🇯🇲',
  JP: '🇯🇵',
  JO: '🇯🇴',
  KZ: '🇰🇿',
  KE: '🇰🇪',
  KI: '🇰🇮',
  KW: '🇰🇼',
  KG: '🇰🇬',
  LA: '🇱🇦',
  LV: '🇱🇻',
  LB: '🇱🇧',
  LS: '🇱🇸',
  LR: '🇱🇷',
  LY: '🇱🇾',
  LI: '🇱🇮',
  LT: '🇱🇹',
  LU: '🇱🇺',
  MG: '🇲🇬',
  MW: '🇲🇼',
  MY: '🇲🇾',
  MV: '🇲🇻',
  ML: '🇲🇱',
  MT: '🇲🇹',
  MH: '🇲🇭',
  MR: '🇲🇷',
  MU: '🇲🇺',
  MX: '🇲🇽',
  FM: '🇫🇲',
  MD: '🇲🇩',
  MC: '🇲🇨',
  MN: '🇲🇳',
  ME: '🇲🇪',
  MA: '🇲🇦',
  MZ: '🇲🇿',
  MM: '🇲🇲',
  NA: '🇳🇦',
  NR: '🇳🇷',
  NP: '🇳🇵',
  NL: '🇳🇱',
  NZ: '🇳🇿',
  NI: '🇳🇮',
  NE: '🇳🇪',
  NG: '🇳🇬',
  KP: '🇰🇵',
  MK: '🇲🇰',
  NO: '🇳🇴',
  OM: '🇴🇲',
  PK: '🇵🇰',
  PW: '🇵🇼',
  PS: '🇵🇸',
  PA: '🇵🇦',
  PG: '🇵🇬',
  PY: '🇵🇾',
  PE: '🇵🇪',
  PH: '🇵🇭',
  PL: '🇵🇱',
  PT: '🇵🇹',
  QA: '🇶🇦',
  RO: '🇷🇴',
  RU: '🇷🇺',
  RW: '🇷🇼',
  KN: '🇰🇳',
  LC: '🇱🇨',
  VC: '🇻🇨',
  WS: '🇼🇸',
  SM: '🇸🇲',
  ST: '🇸🇹',
  SA: '🇸🇦',
  SN: '🇸🇳',
  RS: '🇷🇸',
  SC: '🇸🇨',
  SL: '🇸🇱',
  SG: '🇸🇬',
  SK: '🇸🇰',
  SI: '🇸🇮',
  SB: '🇸🇧',
  SO: '🇸🇴',
  ZA: '🇿🇦',
  KR: '🇰🇷',
  SS: '🇸🇸',
  ES: '🇪🇸',
  LK: '🇱🇰',
  SD: '🇸🇩',
  SR: '🇸🇷',
  SE: '🇸🇪',
  CH: '🇨🇭',
  SY: '🇸🇾',
  TW: '🇹🇼',
  TJ: '🇹🇯',
  TZ: '🇹🇿',
  TH: '🇹🇭',
  TL: '🇹🇱',
  TG: '🇹🇬',
  TO: '🇹🇴',
  TT: '🇹🇹',
  TN: '🇹🇳',
  TR: '🇹🇷',
  TM: '🇹🇲',
  UG: '🇺🇬',
  UA: '🇺🇦',
  AE: '🇦🇪',
  GB: '🇬🇧',
  US: '🇺🇸',
  UY: '🇺🇾',
  UZ: '🇺🇿',
  VU: '🇻🇺',
  VA: '🇻🇦',
  VE: '🇻🇪',
  VN: '🇻🇳',
  YE: '🇾🇪',
  ZM: '🇿🇲',
  ZW: '🇿🇼',
  PR: '🇵🇷',
  HK: '🇭🇰',
};

const earningsByCountry = {};
const paymentsCountByCountry = {};
const paymentAmounts = [];

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'THB' }).format(amount).replace('THB', 'THB');
};

fs.createReadStream(filePath)
  .pipe(csv({ separator: ',' }))
  .on('data', (row) => {
    const country = row['Card Address Country'];
    const amount = parseFloat(row['Converted Amount']);

    if (earningsByCountry[country]) {
      earningsByCountry[country] += amount;
      paymentsCountByCountry[country] += 1;
    } else {
      earningsByCountry[country] = amount;
      paymentsCountByCountry[country] = 1;
    }

    paymentAmounts.push(amount);
  })
  .on('end', () => {
    const sortedEarnings = Object.keys(earningsByCountry)
      .map((country) => ({
        country,
        flag: countryFlags[country] || '',
        amount: earningsByCountry[country],
        count: paymentsCountByCountry[country],
        average: earningsByCountry[country] / paymentsCountByCountry[country],
      }))
      .sort((a, b) => b.amount - a.amount);

    sortedEarnings.forEach((entry) => {
      console.log(
        `${entry.flag} ${entry.country}: ${formatCurrency(entry.amount)} (Total Payments: ${
          entry.count
        }, Average Payment: ${formatCurrency(entry.average)})`
      );
    });

    const maxPayment = Math.max(...paymentAmounts);
    const minPayment = Math.min(...paymentAmounts);
    const totalPayments = paymentAmounts.length;
    const totalEarnings = paymentAmounts.reduce((sum, value) => sum + value, 0);
    const averagePayment = totalEarnings / totalPayments;

    console.log(`\nOverall Statistics:`);
    console.log(`Total Payments: ${totalPayments}`);
    console.log(`Total Earnings: ${formatCurrency(totalEarnings)}`);
    console.log(`Average Payment: ${formatCurrency(averagePayment)}`);
    console.log(`Maximum Payment: ${formatCurrency(maxPayment)}`);
    console.log(`Minimum Payment: ${formatCurrency(minPayment)}`);
  });
