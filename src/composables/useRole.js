import useRegistrationStore from "../store/useRegistrationStore.js";

const useRole = ()=> {
    return useRegistrationStore().user.data.roles[0].name;
}

export default useRole;
