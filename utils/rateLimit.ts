const ipMap = new Map<string, { count: number; lastRequest: number }>();
const WINDOW_TIME = 15 * 60 * 1000; // 15 minute
const MAX_REQUEST = 10;

export function checkRateLimit(ip: string) {
    const now = Date.now();
    const record = ipMap.get(ip);
    if (record) {
        if (now - record.lastRequest > WINDOW_TIME) {
            ipMap.set(ip, { count: 1, lastRequest: now });
            return false;
        }
        if (record.count >= MAX_REQUEST) {
            return true;
        }
        record.count += 1;
        ipMap.set(ip, record);
        return false;
    } else {
        ipMap.set(ip, { count: 1, lastRequest: now });
        return false;
    }
}
