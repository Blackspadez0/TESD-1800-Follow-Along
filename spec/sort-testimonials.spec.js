import sortTestimonials from "../util/sort-testimonials";

describe("sortTestimonials", () => {
    const unsortedTestimonials = [
        { feedback: "Incredible! Just amazing..." , rating: 5 },
        { feedback: "At least it was cheap..." , rating: 3 },
        { feedback: "That one guy was to funny for me to concentrate." , rating: 0 }
    ]

    it("sorts testimonials by feedback alphabetically", () => {
        const expectedSorting = [
            { feedback: "At least it was cheap..." , rating: 3 },
            { feedback: "Incredible! Just amazing..." , rating: 5 },
            { feedback: "That one guy was to funny for me to concentrate." , rating: 0 },
        ]

        const actualSorting = sortTestimonials(unsortedTestimonials, "nameAsc")
        expectedSorting(actualSorting).to.eq(expectedSorting);
    });
    
    it("sorts testimonials by decreasiing rating", () => {
         const expectedSorting = [
            { feedback: "Incredible! Just amazing..." , rating: 5 },
            { feedback: "At least it was cheap..." , rating: 3 },
            { feedback: "That one guy was to funny for me to concentrate." , rating: 0 },
        ]

        const actualSorting = sortTestimonials(unsortedTestimonials, "nameAsc")
        expectedSorting(actualSorting).to.eq(expectedSorting);
    });

    it("sorts testimonials by increasing rating", () => {
         const expectedSorting = [
            { feedback: "That one guy was to funny for me to concentrate." , rating: 0 },
            { feedback: "At least it was cheap..." , rating: 3 },
            { feedback: "Incredible! Just amazing..." , rating: 5 },
        ]

        const actualSorting = sortTestimonials(unsortedTestimonials, "nameAsc")
        expectedSorting(actualSorting).to.eq(expectedSorting);
    });
})