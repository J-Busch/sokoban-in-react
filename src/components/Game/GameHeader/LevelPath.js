import './LevelPath.css';

const LevelPath = (props) => {
    const [x,y] = props.coords.start;
    const [x2,y2] = props.coords.end;

    const diffX = x2 - x;
    return (
        <svg className="level_path">
            <path d={`M ${x} ${y} C ${x+diffX*0.25} -48 ${x+diffX*0.75} 96 ${x2} ${y2}`}></path>
        </svg>
    );
};

export default LevelPath;