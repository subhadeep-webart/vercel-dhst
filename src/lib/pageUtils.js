export const mapComponentsByType = (components = []) => {
    return components?.reduce((acc, item) => {
        if (item?.isVisible) {
            acc[item.type] = item;
        }
        return acc;
    }, {});
};