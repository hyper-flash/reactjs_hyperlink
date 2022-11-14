import { atom, selector } from 'recoil';

export const userState = atom({
    key: 'userInfo',
    default: {
        email: '',
        name: ''
    }
})

export const charCountState = selector({
    key: 'charCountState',
    get: ({ get }) => {
          const text = get(userState);
        return text.name.length;
    }
})