import React, { useState, useEffect } from 'react' ;
import moment from 'moment' ;
import Hero from './components/Hero' ;
import 'bulma/css/bulma.css' ;
import Filters from './components/Filters' ;
import hotelsData from './data' ;
import Hotels from './components/Hotels' ;

const App = () => {
    const initialFilters = {
        dateFrom: moment().toDate(),
        dateTo: moment().toDate(),
        country: undefined,
        price: undefined,
        rooms: undefined,

    } ;
    const [ filters, setFilters ] = useState( initialFilters ) ;
    const [ hotels, setHotels ] = useState( hotelsData ) ;

    const handleChangeFilter = ( e ) => {
        e.preventDefault() ;
        setFilters( {
            ...filters,
            [e.target.name]: e.target.value,
        } ) ;
    } ;

    useEffect( () => {

    }, [] ) ;

    return (
        <>
            <Hero filters={ filters } />
            <Filters
                filters={ filters }
                handleChange={ handleChangeFilter }
            />
            <Hotels hotels={ hotels } />
        </>
    ) ;
} ;

export default App ;
