import React from 'react' ;
import DateFilter from './DateFilter' ;
import OptionsFilter from './OptionsFilter' ;

const Filters = ( { handleChange, filters } ) => {
    const iconFrom = 'fa-sign-in-alt' ;
    const iconTo = 'fa-sign-out-alt' ;
    const countries = [
        { value: undefined, name: 'Todos los países' },
        { value: 'Argentina', name: 'Argentina' },
        { value: 'Brasil', name: 'Brasil' },
        { value: 'Chile', name: 'Chile' },
        { value: 'Uruguay', name: 'Uruguay' },
    ] ;
    const prices = [
        { value: undefined, name: 'Cualquier precio' },
        { value: 1, name: '$' },
        { value: 2, name: '$$' },
        { value: 3, name: '$$$' },
        { value: 4, name: '$$$$' },
    ] ;
    const typeOfHotel = [
        { value: undefined, name: 'Cualquier tamaño' },
        { value: 10, name: 'Hotel pequeño' },
        { value: 20, name: 'Hotel mediano' },
        { value: 30, name: 'Hotel grande' },
    ] ;

    return (
        <nav className="navbar is-info" style={ { justifyContent: 'center' } }>
            <div className="navbar-item">
                <DateFilter
                    date={ filters.dateFrom }
                    data="dateFrom"
                    icon={ iconFrom }
                    onChange={ handleChange }
                />
            </div>
            <div className="navbar-item">
                <DateFilter
                    date={ filters.dateTo }
                    data="dateTo"
                    icon={ iconTo }
                    onChange={ handleChange }
                />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    data="country"
                    options={ countries }
                    selected={ filters.country }
                    icon="fa-globe"
                    onChange={ handleChange }
                />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={ prices }
                    data="price"
                    selected={ filters.price }
                    icon="fa-dollar-sign"
                    onChange={ handleChange }
                />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    data="rooms"
                    options={ typeOfHotel }
                    selected={ filters.rooms }
                    icon="fa-bed"
                    onChange={ handleChange }
                />
            </div>

        </nav>
    ) ;
} ;

export default Filters ;
