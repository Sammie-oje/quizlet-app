export const getSubjectFromUrl = url => {
    const subject = url.replace(/^\/(quiz|result)\//, "");

    return subject;
};
