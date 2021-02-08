

const ColoredLine = ({ styleLine, color }) => (
    <hr className={styleLine}
        style={{
            color: color,
            backgroundColor: color,
            height: 4,
            width: 30,
            noshade: "noshade",
            align:"center",
            
        }}
    />
);

export default ColoredLine;