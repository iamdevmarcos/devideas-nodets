type MenuOptions = '' | 'all' | 'beginner' | 'intermediate' | 'advanced';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        beginner: false,
        intermediate: false,
        advanced: false
    };

    (activeMenu!=='')?returnObject[activeMenu]=true:'';

    return returnObject;
}