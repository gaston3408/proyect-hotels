import React from 'react' ;

const OptionsFilter = ( {
    options, selected, icon, onChange, data,
} ) => (

    <div className="field">
        <div className="control has-icons-left">
            <div className="select is-rounded is-small" style={ { width: '100%' } }>
                <select value={ selected } style={ { width: '100%' } } name={ data } onChange={ ( e ) => onChange( e ) }>
                    { options.map( ( option ) => (
                        <option
                            key={ option.name }
                            value={ option.value }
                        >
                            { option.name }

                        </option>
                    ) ) }
                </select>
            </div>
            <div className="icon is-small is-left">
                <i className={ `fas ${icon}` } />
            </div>
        </div>
    </div>

) ;

export default OptionsFilter ;
