export const getNav = (role) => {
    switch (role) {
        case 'parent':
            return [
                {name: "Курсы", routeName: "/courses"},
                {name: "Оценки детей", routeName: "/kid-marks"},
                {name: "Профиль", routeName: "/profile"},
            ];
        case 'teacher':
            return [
                {name: "Курсы", routeName: "/courses"},
                {name: "Мои курсы", routeName: "/my-courses"},
                {name: "Журнал", routeName: "/journal"},
                {name: "Профиль", routeName: "/profile"},
            ];
        case 'student':
            return [
                {name: "Курсы", routeName: "/courses"},
                {name: "Мое обучение", routeName: "/my-courses"},
                {name: "Профиль", routeName: "/profile"},
                {name: "Магазин аватарок", routeName: "/avatars-store"},
            ];
        default:
            return [];
    }
}
