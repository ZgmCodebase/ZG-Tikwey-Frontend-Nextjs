type DefaultTextFieldProp = {
    onChange?: (...event: any[]) => void;
    value?: string;
    placeholder?: string;
};

function DefaultTextField({
    value,
    onChange,
    placeholder,
}: DefaultTextFieldProp) {
    return (
        <div className="w-full">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-white"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default DefaultTextField;
