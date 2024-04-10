export default [
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1483519173755-be893fab1f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXllc3xlbnwwfHwwfHx8MA%3D%3D",
        position: "top-right",
        alias: 'Pupil'
    },
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1617339860632-f53c5b5dce4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXllYmFsbHxlbnwwfHwwfHx8MA%3D%3D",
        position: "bottom-left",
        alias: 'Eye'
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1615552440985-d652ebf4c199?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXllJTIwYW5hdG9teXxlbnwwfHwwfHx8MA%3D%3D",
        position: "bottom-right",
        alias: 'Eye Anatomy'
    },
    {
        id: 3,
        img: "https://www.ashdownandcollins.co.uk/wp-content/uploads/2022/03/shutterstock_1473985049.png",
        position: "top-left",
        alias: 'B&W Scan'
    },
];


export type imageDataType = Array<{
    id: number;
    img: string;
    position: string;
}>