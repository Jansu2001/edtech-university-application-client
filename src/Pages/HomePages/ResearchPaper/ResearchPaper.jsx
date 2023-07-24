import { Link } from "react-router-dom";

const ResearchPaper = () => {
    return (
        <div className="pt-5">

            <h1 className="text-center text-3xl font-semibold">Research Papper</h1>

            <ul className="space-y-3 pt-5">
                <li className="py-2"><Link to='https://blog.scienceopen.com/2023/07/aboutscience-launching-new-collection-on-scienceopen/' target="blank" >AboutScience launching new collection on ScienceOpen</Link></li>
                <li className="py-2">

                    <Link to='https://blog.scienceopen.com/2023/06/scienceopens-monthly-digest-june-2023/' target="blank" >ScienceOpen Monthly Digest June 2023</Link></li>

                <li className="py-2">

                    <Link to='https://blog.scienceopen.com/2023/06/open-access-hosting-for-conference-on-moisture-in-buildings-series/' target="blank" >Open Access Hosting for Conference on Moisture in Buildings Series</Link></li>

                <li className="py-2">

                    <Link to='https://blog.scienceopen.com/2023/06/welcoming-educational-challenges-journal/' target="blank" >Welcoming Educational Challenges Journal</Link></li>

            </ul>

        </div>
    );
};

export default ResearchPaper;