import { useLoaderData } from "react-router-dom";
import PageTitle from "../Components/Learn/PageTitle";
import Category from "../Components/Learn/Category";


const Learn = () => {
    // loader Data from learn page
    const categories = useLoaderData();

    return (
        <div>
            {/* Learn Title */}
            <section>
            <PageTitle pageTitle={`Let's Learn`} text={`This is where your learning journey Begins!`}></PageTitle>
            </section>

            {/* Category */}
            <section className="grid gap-10 grid-cols-4 container mx-auto py-28">
                {categories.map(category => <Category key={category.id} category={category}></Category>)}
            </section>
        </div>
    );
};

export default Learn;