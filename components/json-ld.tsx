export function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Giorgio Vanini",
        jobTitle: "Data Analyst",
        url: "https://giorgiovanini.eu",
        sameAs: [
            "https://www.linkedin.com/in/giorgio-vanini-8627123a4/",
            "https://github.com/sakn0m",
        ],
        knowsAbout: [
            "Data Analysis",
            "Python",
            "Machine Learning",
            "Statistics",
            "SQL",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
    );
}
