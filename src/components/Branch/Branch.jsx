

const Branch = ({branch}) => {
    const {name, location, contact, hours} = branch
    return (
        <div className="text-center bg-base-200 border-2 rounded-3xl p-6 space-y-4">
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-lg font-bold text-gray-600">{location}</p>
            <p className="text-lg font-bold text-gray-600">Open: {hours}</p>
            <p className="text-lg font-bold">Contact no: {contact}</p>
        </div>
    );
};

export default Branch;