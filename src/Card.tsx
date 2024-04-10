import {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import './App.scss'

type positionType = {
    [key: string]: {
        gridRow: number,
        gridColumn: number
    }
};

// @ts-ignore
const Card = ({src, id, position, index, moveImage}) => {

    const positions: positionType = {
        "top-left": {gridRow: 1, gridColumn: 1},
        "top-right": {gridRow: 1, gridColumn: 2},
        "bottom-left": {gridRow: 2, gridColumn: 1},
        "bottom-right": {gridRow: 2, gridColumn: 2},
    };

    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: "image",
        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveImage(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    });

    const [{isDragging}, drag] = useDrag({
        type: "image",
        item: () => {
            return {id, index};
        },
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging(),
            };
        },
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    return (
        <div ref={ref} style={{
            opacity: opacity,
            gridRow: positions[position].gridRow,
            gridColumn: positions[position].gridColumn,
        }}>
            <img src={src}
                 alt='Eye Scane image'
            />
        </div>
    );
};

export default Card;
