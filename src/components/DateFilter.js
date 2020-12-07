import React from 'react' ;
import moment from 'moment' ;

const DateFilter = ( {
    date, icon, data, onChange,
} ) => (
    <div className="field">
        <div className="control has-icons-left">
            <input
                className="input is-rounded is-small"
                name={ data }
                type="date"
                value={ moment( date ).format( 'YYYY-MM-DD' ) }
                onChange={ ( e ) => onChange( e ) }
            />
            <span className="icon is-small is-left">
                <i className={ `fas ${icon}` } />
            </span>
        </div>
    </div>
) ;

export default DateFilter ;
