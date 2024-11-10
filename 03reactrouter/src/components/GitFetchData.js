export const gitFetchData = async () => {
    const response = await fetch("https://api.github.com/users/sanjay892000");
    const data = await response.json()
    return data;
}

