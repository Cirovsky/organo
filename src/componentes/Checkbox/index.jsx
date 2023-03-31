import './Checkbox.css'

const Checkbox = ({ label, valor, aoAlterado, zeraTime }) => {

    return (
        <>
            <label>{label}</label>
            <input
                label={label}
                type='checkbox'
                value={valor}
                onChange={ () => {
                    zeraTime()
                    aoAlterado(!valor);
                }}
            />
        </>

    );
}

export default Checkbox;