const parseStatus = (status) => {
    if (status === "in_progress")
        return "In progress";
    if (status === "finished")
        return "Finished";
    if (status === "parent")
        return "Parent";
    return status;
}

export default parseStatus;
