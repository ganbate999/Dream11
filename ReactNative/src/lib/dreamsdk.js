
const TOKEN_KEY = 'dream_reactnative_usertoken';

const DreamSDK = {
    TOKEN_KEY,
    async loginWithPassword({ user, password }) {

        let params = {user, password};

        try {
            return await this.login(params);
        } catch (error) {
            throw error;
        }
    },

    async login(params) {
        try {
            // const sdk = this.shareSDK || this.sdk;
            // // RC 0.64.0
            // await sdk.login(params);
            // const { result } = sdk.currentLogin;
            // // 文字サイズ情報をリストア
            // const textsize = await AsyncStorage.getItem('textsize');
            return {
                id: 'test_id_LGI#%T#LO$WI',
                token: 'test_token_ELKOI$A^%$^REHER^$#^$#^324654423',
                username: 'test',
                email: 'test1@test.com',
            };
        } catch (e) {
            throw e;
        }
    },
}

export default DreamSDK;
