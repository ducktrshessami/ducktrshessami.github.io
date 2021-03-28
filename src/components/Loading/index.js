import "./Loading.css";

export default function Loading({ size, className }) {
    return (
        <div className={`loading-${size} ${className}`}>
            <div className={`preloader-wrapper ${size} active`}>
                <div className="spinner-layer mint-loading">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
