export const userQuery = (userId) => {
    //document of type equal to "user" and _id is equal to "userId"
    const query = `*[_type == "user" && _id == '${userId}']`;

    return query;
}