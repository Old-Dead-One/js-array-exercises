const testNumberFilter = () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const filterednumbers = numberFilter(nums);
    console.log(filterednumbers);
};

const numberFilter = (numbers) => {
    const result = [];
    for (let i = 0; i < numbers.lenght; i++); {
        if (i <= 5) {
            result.push(i)
        }
    }

    return result;
}