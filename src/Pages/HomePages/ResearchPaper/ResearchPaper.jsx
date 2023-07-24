import { Link } from "react-router-dom";

const ResearchPaper = () => {
    return (
        <div className="pt-5">

            <h1 className="text-center text-3xl font-semibold">Research Papper</h1>

            <ul className="space-y-3 pt-5">
                <li className="py-2"><Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum?</Link></li>
                <li className="py-2"><Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum?</Link></li>
                <li className="py-2"><Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum?</Link></li>
                <li className="py-2"><Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum?</Link></li>
            </ul>

        </div>
    );
};

export default ResearchPaper;