import { LoaderStyleComponent } from './style';
//This fixes the error React: Type {children: Element}
// has no properties in common with type IntrinsicAttributes

const Loader3 = () => {
    return (
        <LoaderStyleComponent>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </LoaderStyleComponent>
    );
};

export default Loader3;
