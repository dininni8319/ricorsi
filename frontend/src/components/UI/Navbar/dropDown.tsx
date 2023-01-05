const dropDown = ({
    children,
    title
}: {
    children: JSX.Element;
    title: string;
}) => {
    return (
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="nav-label-style">
                {title}
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                {children}
            </ul>
        </div>
    );
};

export default dropDown;
