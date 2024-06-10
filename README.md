# Stripe Country Revenue Calculator

This script calculates the total revenue from Stripe payments by country, providing useful insights into where your revenue is coming from.

## Features

- Calculate total revenue by country
- Calculate the number of payments per country
- Calculate the average payment amount per country
- Format the revenue amounts in a readable format
- Display country flags alongside country names

## Requirements

- Node.js

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/country-revenue-stripe-payments.git
    ```
2. Navigate to the project directory:
    ```sh
    cd country-revenue-stripe-payments
    ```
3. Install the required packages:
    ```sh
    npm install
    ```

## Usage

1. Place your Stripe payments CSV file in the project directory.
2. Update the `filePath` variable in the `index.js` script with the path to your CSV file.
3. Run the script:
    ```sh
    npm start
    ```

## Example Output

```sh
🇪🇸 ES: $3,876.91 (Total Payments: 310, Average Payment: $12.51)
🇲🇽 MX: $1,465.41 (Total Payments: 114, Average Payment: $12.85)
🇨🇱 CL: $1,096.84 (Total Payments: 48, Average Payment: $22.85)
🇺🇸 US: $930.88 (Total Payments: 48, Average Payment: $19.39)
🇵🇪 PE: $338.91 (Total Payments: 19, Average Payment: $17.84)
🇦🇷 AR: $274.34 (Total Payments: 6, Average Payment: $45.72)
🇨🇷 CR: $273.64 (Total Payments: 6, Average Payment: $45.61)
🇵🇦 PA: $212.87 (Total Payments: 12, Average Payment: $17.74)
🇮🇹 IT: $159.95 (Total Payments: 9, Average Payment: $17.77)
🇩🇪 DE: $106.34 (Total Payments: 6, Average Payment: $17.72)
🇧🇷 BR: $89.98 (Total Payments: 5, Average Payment: $18.00)
🇺🇾 UY: $72.18 (Total Payments: 4, Average Payment: $18.05)
🇵🇷 PR: $72.15 (Total Payments: 4, Average Payment: $18.04)
🇦🇩 AD: $69.35 (Total Payments: 6, Average Payment: $11.56)
🇬🇹 GT: $54.27 (Total Payments: 3, Average Payment: $18.09)
🇩🇴 DO: $53.92 (Total Payments: 3, Average Payment: $17.97)
🇨🇭 CH: $53.57 (Total Payments: 3, Average Payment: $17.86)
🇩🇿 DZ: $36.23 (Total Payments: 2, Average Payment: $18.12)
🇧🇴 BO: $36.19 (Total Payments: 2, Average Payment: $18.10)
🇸🇻 SV: $35.78 (Total Payments: 2, Average Payment: $17.89)
🇪🇨 EC: $34.74 (Total Payments: 2, Average Payment: $17.37)
🇬🇷 GR: $28.22 (Total Payments: 1, Average Payment: $28.22)
🇨🇦 CA: $18.19 (Total Payments: 1, Average Payment: $18.19)
🇨🇴 CO: $18.14 (Total Payments: 1, Average Payment: $18.14)
🇬🇧 GB: $18.08 (Total Payments: 1, Average Payment: $18.08)
🇭🇰 HK: $18.03 (Total Payments: 1, Average Payment: $18.03)
🇷🇴 RO: $17.91 (Total Payments: 1, Average Payment: $17.91)
🇫🇷 FR: $17.68 (Total Payments: 1, Average Payment: $17.68)
🇵🇹 PT: $17.67 (Total Payments: 1, Average Payment: $17.67)

Overall Statistics:
Total Payments: 622
Total Earnings: $9,485.13
Average Payment: $15.25
Maximum Payment: $281.97
Minimum Payment: $1.24
```