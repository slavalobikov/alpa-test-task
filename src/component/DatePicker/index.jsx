import Input from "../Input";

const DatePicker = ({name , label}) => {

    return (
            <Input
                type="date"
                name={name}
                label={label}
            />
    );
};

export default DatePicker;