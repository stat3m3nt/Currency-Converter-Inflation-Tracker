/*StAuth10244: I Andrew Evboifo, 000909727 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.*/

import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function App() {
  // list of all recognized countries and 2 letter ISO code for country dropdown menu
  const countries = [
    { code: 'AF', name: 'Afghanistan', flag: '🇦🇫' },
    { code: 'AL', name: 'Albania', flag: '🇦🇱' },
    { code: 'DZ', name: 'Algeria', flag: '🇩🇿' },
    { code: 'AD', name: 'Andorra', flag: '🇦🇩' },
    { code: 'AO', name: 'Angola', flag: '🇦🇴' },
    { code: 'AG', name: 'Antigua & Barbuda', flag: '🇦🇬' },
    { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
    { code: 'AM', name: 'Armenia', flag: '🇦🇲' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'AT', name: 'Austria', flag: '🇦🇹' },
    { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿' },
    { code: 'BS', name: 'Bahamas', flag: '🇧🇸' },
    { code: 'BH', name: 'Bahrain', flag: '🇧🇭' },
    { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
    { code: 'BB', name: 'Barbados', flag: '🇧🇧' },
    { code: 'BY', name: 'Belarus', flag: '🇧🇾' },
    { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
    { code: 'BZ', name: 'Belize', flag: '🇧🇿' },
    { code: 'BJ', name: 'Benin', flag: '🇧🇯' },
    { code: 'BT', name: 'Bhutan', flag: '🇧🇹' },
    { code: 'BO', name: 'Bolivia', flag: '🇧🇴' },
    { code: 'BA', name: 'Bosnia & Herzegovina', flag: '🇧🇦' },
    { code: 'BW', name: 'Botswana', flag: '🇧🇼' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: 'BN', name: 'Brunei', flag: '🇧🇳' },
    { code: 'BG', name: 'Bulgaria', flag: '🇧🇬' },
    { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
    { code: 'BI', name: 'Burundi', flag: '🇧🇮' },
    { code: 'KH', name: 'Cambodia', flag: '🇰🇭' },
    { code: 'CM', name: 'Cameroon', flag: '🇨🇲' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'CV', name: 'Cape Verde', flag: '🇨🇻' },
    { code: 'CF', name: 'Central African Republic', flag: '🇨🇫' },
    { code: 'TD', name: 'Chad', flag: '🇹🇩' },
    { code: 'CL', name: 'Chile', flag: '🇨🇱' },
    { code: 'CN', name: 'China', flag: '🇨🇳' },
    { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
    { code: 'KM', name: 'Comoros', flag: '🇰🇲' },
    { code: 'CD', name: 'Congo (DRC)', flag: '🇨🇩' },
    { code: 'CG', name: 'Congo (Republic)', flag: '🇨🇬' },
    { code: 'CR', name: 'Costa Rica', flag: '🇨🇷' },
    { code: 'HR', name: 'Croatia', flag: '🇭🇷' },
    { code: 'CU', name: 'Cuba', flag: '🇨🇺' },
    { code: 'CY', name: 'Cyprus', flag: '🇨🇾' },
    { code: 'CZ', name: 'Czechia', flag: '🇨🇿' },
    { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
    { code: 'DJ', name: 'Djibouti', flag: '🇩🇯' },
    { code: 'DM', name: 'Dominica', flag: '🇩🇲' },
    { code: 'DO', name: 'Dominican Republic', flag: '🇩🇴' },
    { code: 'EC', name: 'Ecuador', flag: '🇪🇨' },
    { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
    { code: 'SV', name: 'El Salvador', flag: '🇸🇻' },
    { code: 'GQ', name: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: 'ER', name: 'Eritrea', flag: '🇪🇷' },
    { code: 'EE', name: 'Estonia', flag: '🇪🇪' },
    { code: 'SZ', name: 'Eswatini', flag: '🇸🇿' },
    { code: 'ET', name: 'Ethiopia', flag: '🇪🇹' },
    { code: 'FJ', name: 'Fiji', flag: '🇫🇯' },
    { code: 'FI', name: 'Finland', flag: '🇫🇮' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'GA', name: 'Gabon', flag: '🇬🇦' },
    { code: 'GM', name: 'Gambia', flag: '🇬🇲' },
    { code: 'GE', name: 'Georgia', flag: '🇬🇪' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
    { code: 'GR', name: 'Greece', flag: '🇬🇷' },
    { code: 'GD', name: 'Grenada', flag: '🇬🇩' },
    { code: 'GT', name: 'Guatemala', flag: '🇬🇹' },
    { code: 'GN', name: 'Guinea', flag: '🇬🇳' },
    { code: 'GW', name: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: 'GY', name: 'Guyana', flag: '🇬🇾' },
    { code: 'HT', name: 'Haiti', flag: '🇭🇹' },
    { code: 'HN', name: 'Honduras', flag: '🇭🇳' },
    { code: 'HU', name: 'Hungary', flag: '🇭🇺' },
    { code: 'IS', name: 'Iceland', flag: '🇮🇸' },
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'IR', name: 'Iran', flag: '🇮🇷' },
    { code: 'IQ', name: 'Iraq', flag: '🇮🇶' },
    { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
    { code: 'IL', name: 'Israel', flag: '🇮🇱' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: 'JM', name: 'Jamaica', flag: '🇯🇲' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: 'JO', name: 'Jordan', flag: '🇯🇴' },
    { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },
    { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
    { code: 'KI', name: 'Kiribati', flag: '🇰🇮' },
    { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
    { code: 'KW', name: 'Kuwait', flag: '🇰🇼' },
    { code: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: 'LA', name: 'Laos', flag: '🇱🇦' },
    { code: 'LV', name: 'Latvia', flag: '🇱🇻' },
    { code: 'LB', name: 'Lebanon', flag: '🇱🇧' },
    { code: 'LS', name: 'Lesotho', flag: '🇱🇸' },
    { code: 'LR', name: 'Liberia', flag: '🇱🇷' },
    { code: 'LY', name: 'Libya', flag: '🇱🇾' },
    { code: 'LI', name: 'Liechtenstein', flag: '🇱🇮' },
    { code: 'LT', name: 'Lithuania', flag: '🇱🇹' },
    { code: 'LU', name: 'Luxembourg', flag: '🇱🇺' },
    { code: 'MG', name: 'Madagascar', flag: '🇲🇬' },
    { code: 'MW', name: 'Malawi', flag: '🇲🇼' },
    { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
    { code: 'MV', name: 'Maldives', flag: '🇲🇻' },
    { code: 'ML', name: 'Mali', flag: '🇲🇱' },
    { code: 'MT', name: 'Malta', flag: '🇲🇹' },
    { code: 'MH', name: 'Marshall Islands', flag: '🇲🇭' },
    { code: 'MR', name: 'Mauritania', flag: '🇲🇷' },
    { code: 'MU', name: 'Mauritius', flag: '🇲🇺' },
    { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
    { code: 'FM', name: 'Micronesia', flag: '🇫🇲' },
    { code: 'MD', name: 'Moldova', flag: '🇲🇩' },
    { code: 'MC', name: 'Monaco', flag: '🇲🇨' },
    { code: 'MN', name: 'Mongolia', flag: '🇲🇳' },
    { code: 'ME', name: 'Montenegro', flag: '🇲🇪' },
    { code: 'MA', name: 'Morocco', flag: '🇲🇦' },
    { code: 'MZ', name: 'Mozambique', flag: '🇲🇿' },
    { code: 'MM', name: 'Myanmar', flag: '🇲🇲' },
    { code: 'NA', name: 'Namibia', flag: '🇳🇦' },
    { code: 'NR', name: 'Nauru', flag: '🇳🇷' },
    { code: 'NP', name: 'Nepal', flag: '🇳🇵' },
    { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
    { code: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
    { code: 'NI', name: 'Nicaragua', flag: '🇳🇮' },
    { code: 'NE', name: 'Niger', flag: '🇳🇪' },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: 'NO', name: 'Norway', flag: '🇳🇴' },
    { code: 'OM', name: 'Oman', flag: '🇴🇲' },
    { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
    { code: 'PW', name: 'Palau', flag: '🇵🇼' },
    { code: 'PA', name: 'Panama', flag: '🇵🇦' },
    { code: 'PG', name: 'Papua New Guinea', flag: '🇵🇬' },
    { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },
    { code: 'PE', name: 'Peru', flag: '🇵🇪' },
    { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
    { code: 'PL', name: 'Poland', flag: '🇵🇱' },
    { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
    { code: 'QA', name: 'Qatar', flag: '🇶🇦' },
    { code: 'RO', name: 'Romania', flag: '🇷🇴' },
    { code: 'RU', name: 'Russia', flag: '🇷🇺' },
    { code: 'RW', name: 'Rwanda', flag: '🇷🇼' },
    { code: 'KN', name: 'Saint Kitts & Nevis', flag: '🇰🇳' },
    { code: 'LC', name: 'Saint Lucia', flag: '🇱🇨' },
    { code: 'VC', name: 'Saint Vincent & Grenadines', flag: '🇻🇨' },
    { code: 'WS', name: 'Samoa', flag: '🇼🇸' },
    { code: 'SM', name: 'San Marino', flag: '🇸🇲' },
    { code: 'ST', name: 'Sao Tome & Principe', flag: '🇸🇹' },
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: 'SN', name: 'Senegal', flag: '🇸🇳' },
    { code: 'RS', name: 'Serbia', flag: '🇷🇸' },
    { code: 'SC', name: 'Seychelles', flag: '🇸🇨' },
    { code: 'SL', name: 'Sierra Leone', flag: '🇸🇱' },
    { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
    { code: 'SK', name: 'Slovakia', flag: '🇸🇰' },
    { code: 'SI', name: 'Slovenia', flag: '🇸🇮' },
    { code: 'SB', name: 'Solomon Islands', flag: '🇸🇧' },
    { code: 'SO', name: 'Somalia', flag: '🇸🇴' },
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: 'SD', name: 'Sudan', flag: '🇸🇩' },
    { code: 'SR', name: 'Suriname', flag: '🇸🇷' },
    { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
    { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
    { code: 'SY', name: 'Syria', flag: '🇸🇾' },
    { code: 'TW', name: 'Taiwan', flag: '🇹🇼' },
    { code: 'TJ', name: 'Tajikistan', flag: '🇹🇯' },
    { code: 'TZ', name: 'Tanzania', flag: '🇹🇿' },
    { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
    { code: 'TL', name: 'Timor-Leste', flag: '🇹🇱' },
    { code: 'TG', name: 'Togo', flag: '🇹🇬' },
    { code: 'TO', name: 'Tonga', flag: '🇹🇴' },
    { code: 'TT', name: 'Trinidad & Tobago', flag: '🇹🇹' },
    { code: 'TN', name: 'Tunisia', flag: '🇹🇳' },
    { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
    { code: 'TM', name: 'Turkmenistan', flag: '🇹🇲' },
    { code: 'TV', name: 'Tuvalu', flag: '🇹🇻' },
    { code: 'UG', name: 'Uganda', flag: '🇺🇬' },
    { code: 'UA', name: 'Ukraine', flag: '🇺🇦' },
    { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
    { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
    { code: 'VU', name: 'Vanuatu', flag: '🇻🇺' },
    { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
    { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
    { code: 'YE', name: 'Yemen', flag: '🇾🇪' },
    { code: 'ZM', name: 'Zambia', flag: '🇿🇲' },
    { code: 'ZW', name: 'Zimbabwe', flag: '🇿🇼' },
  ];
  // State Variables
  const [baseCurrency, setBaseCurrency] = useState('CAD');
  const [targetCurrency, setTargetCurrency] = useState('GBP');
  const [amount, setAmount] = useState('');
  const [conversion, setConversion] = useState(null);
  const [inflationData, setInflationData] = useState([]);
  const [countryCode, setCountryCode] = useState('CA');
  const [years, setYears] = useState('5');

  // Function: currency conversion function using exchangerate.host API to fetch real-time exchange rates
  const convert = async () => {
    if (!amount || isNaN(Number(amount))) {
      Alert.alert('Please enter a valid amount');
      return;
    }
    try {
      // dynamic API URL based on user input
      const url = `https://api.exchangerate.host/convert?access_key=1d48e3ed59778ae8009f48bef859d4d6&from=${baseCurrency.toUpperCase()}&to=${targetCurrency.toUpperCase()}&amount=${amount}`;

      const response = await fetch(url);
      const result = await response.json();
      console.log('Currency API result', result);

      if (!result.success) {
        Alert.alert('Error', 'Conversion failed. Check currency codes.');
        return;
      }

      //updates state result with converted value
      setConversion({
        rate: result.info.quote,
        value: result.result,
      });
    } catch (err) {
      console.error('Error fetching currency', err);
      Alert.alert('Error', 'Failed to fetch currency data. Try again Later.');
    }
  };

  /**
   * Function: Fetches the last N years of inflation using consumer price index data for a given country
   * Uses World Bank Indicators API
   *
   * @param {string} countryCode - 2 - letter country code (e.g., 'CA','NZ')
   * @param {number} years = Number of years to fetch data with a default setting of 5 yeears
   */
  const fetchInflationData = async (
    countryCodeInput = countryCode,
    yearsToFetch = Number(years)
  ) => {
    try {
      //API URL for consumer price index
      const url = `https://api.worldbank.org/v2/country/${countryCodeInput.toUpperCase()}/indicator/FP.CPI.TOTL.ZG?format=json&per_page=${yearsToFetch}`;

      const response = await fetch(url);
      const data = await response.json();

      // ensures that results are only mapped if data exists
      if (data[1]) {
        const lastYears = data[1].map((item) => ({
          year: item.date,
          value: item.value, // inflation %
        }));
        setInflationData(lastYears);
      } else {
        setInflationData([]); // no data found
      }
    } catch (error) {
      console.error('Error fetching inflation data:', error);
      setInflationData([]);
    }
  };
   const reversedData = inflationData?.filter(Boolean).slice().reverse(); // reverse data so olderst -> newest
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('./assets/currency_converter_hero_image.png')}
        style={styles.image}
      />
      {/* Title */}
      <Text style={styles.title}> Currency Converter + Inflation App </Text>

      {/* Currency Conversion */}
      <Text>Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ''))}
        keyboardType="numeric"
        placeholder="Enter amount"
      />

      <Text>Base Currency:</Text>
      <TextInput
        style={styles.input}
        value={baseCurrency}
        onChangeText={(text) => setBaseCurrency(text)}
        placeholder="e.g, CAD"
      />

      <Text>Target Currency:</Text>
      <TextInput
        style={styles.input}
        value={targetCurrency}
        onChangeText={(text) => setTargetCurrency(text)}
        placeholder="e.g., GBP"
      />
      <TouchableOpacity style={styles.primaryButton} onPress={convert}>
        <Text style={styles.buttonText}>Convert Currency</Text>
      </TouchableOpacity>

      {conversion && conversion.value != null && conversion.rate != null && (
        <View style={{ marginTop: 10 }}>
          <Text>
            {amount} {baseCurrency.toUpperCase()} ={' '}
            {conversion.value.toFixed(2)} {targetCurrency.toUpperCase()}
          </Text>
          <Text>
            Exchange Rate: 1 {baseCurrency.toUpperCase()} ={' '}
            {conversion.rate.toFixed(4)} {targetCurrency.toUpperCase()}
          </Text>
        </View>
      )}

      {/* Inflation section using two-letter country codes for input style defined by international organization for standardization */}
      <Text>Country Code (ISO 2-letter):</Text>

      <TextInput
        style={styles.input}
        value={countryCode}
        onChangeText={(text) => setCountryCode(text)}
        placeholder="e.g., CA"
      />
      <Text style={[styles.label, { marginTop: 20 }]}>Select Country:</Text>
      <Picker
        selectedValue={countryCode}
        onValueChange={(itemValue) => setCountryCode(itemValue)}
        style={{ height: 50, width: '100%'}}
        >
        {countries.map((c) => (
          <Picker.Item
          key={c.code}
          label={`${c.flag} ${c.name}`}
          value={c.code}
        />

        ))}
      </Picker>
      <Text style={styles.label}>Number of Years:</Text>
      <TextInput
        style={styles.input}
        value={years}
        onChangeText={(text) => setYears(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => fetchInflationData(countryCode, Number(years))}>
        <Text style={styles.buttonText}>Fetch Inflation for {years} Years</Text>
      </TouchableOpacity>

     
      <FlatList
        data={reversedData} 
        keyExtractor={(item, index) => item.year + index}
        renderItem={({ item, index }) => {
          if(!item) return null;
        
          let trend = '';
          if (index > 0) {
            const prevValue = reversedData[index - 1]?.value; // previous year in original data
            if (item.value != null && prevValue != null) {
              trend =
                item.value > prevValue
                  ? '⬆️'
                  : item.value < prevValue
                  ? '⬇️'
                  : '➡️';
            }
          }
          return (
            <View style={styles.listItem}>
              <Text style={{ flex: 1 }}>{item.year}</Text>
              <Text style={{ flex: 1 }}>
                {item.value !== null ? `${item.value}%` : 'N/A'}
              </Text>
              <Text style={{ flex: 0.5 }}>{trend}</Text>
            </View>
          );
        }}
        style={{ marginTop: 10 }}
      />
    </ScrollView>
  );
}
//----------------------------------------
// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
  },
  image: {
    width: 220,
    height: 120,
    alignSelf: 'center',
    marginBottom: 15,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  primaryButton: {
    backgroundColor: `#E7497B`,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: `#ED4912`,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },

  // flag: {
  //   width: 30,
  //   height: 20,
  //   marginRight: 10,
  // },
});
