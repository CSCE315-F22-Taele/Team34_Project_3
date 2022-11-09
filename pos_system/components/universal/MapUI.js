import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from '../../styles/universal/MapUI.module.css';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
const containerStyle = {
  width: '40vw',
  height: '100vh'
};

const center = {
  lat: 30.62113219621122,
  lng: -96.34038303246915,
};
const libraries = ["places"];
const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC4LMdEMeuSYC-xjV2W3EXEDa-7nUi6JpU',
    libraries,
  });

  const [map, setMap] = React.useState(null);
  const mapRef = React.useRef();

  const onLoad = React.useCallback((map) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(20);
  }, []);

  return isLoaded ? (
    <div>
      <Search panTo={panTo}/>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </div>
  ) : <></>
}
function Search({panTo}){
  const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
    requestOptions:{
      location: {
        lat: () => 30.62113219621122,
        lng: () => -96.34038303246915,
      },
      radius: 20 * 1000
    }
  });

  return (
    <div className="search">
    <Combobox onSelect = {async (address) => {
      setValue(address, false);
      clearSuggestions()
      try {
        const results = await getGeocode({address});
        const {lat, lng} = await getLatLng(results[0]);
        console.log({lat, lng});
        panTo({lat, lng});
      }
      catch(error){
        console.log("error")
      }
      }}>
      <ComboboxInput value = {value}
        onChange ={(e) => {setValue(e.target.value);}}
        disabled = {!ready}
        placeholder="enteranaddress"
      />
      <ComboboxPopover>
        {status === "OK" && data.map(({id, description}) => <ComboboxOption key = {id} value = {description}/>)}
      </ComboboxPopover>
    </Combobox>
    </div>
  )
}

export default React.memo(MyMap, Search)
