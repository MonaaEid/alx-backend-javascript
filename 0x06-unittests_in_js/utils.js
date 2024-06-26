class Utils {
    static calculateNumber(type, a, b) {
        const aRound = Math.round(a);
        const bRound = Math.round(b);
        let c = 0;
    
        switch (type) {
            case 'SUM':
                c = aRound + bRound;
                break;
            case 'SUBTRACT':
                c = aRound - bRound;
                break;
            case 'DIVIDE':
                if (bRound === 0) return 'Error';
                c = aRound / bRound;
                break;
            }
        return c;
    }
}

module.exports = Utils;
