import React from "react";
import {Picker} from '@react-native-picker/picker';

const CitySelect = ({selectedCity, setSelectedCity}) => {
  return (
    <Picker
      style={{width: "100%"}}
      selectedValue={selectedCity}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedCity(itemValue)
      }>
      <Picker.Item label="Stockholm" value="stockholm" />
      <Picker.Item label="Warsaw" value="warsaw" />
    </Picker>
  )
}

export default CitySelect