import "./Loading.css";

export default function Loading() {
    return (
        <div className="loading">
            <div className="preloader-wrapper big active">
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
