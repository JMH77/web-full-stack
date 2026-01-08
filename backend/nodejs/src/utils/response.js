// 统一返回数据格式
export function buildResponse(success, message, data = null) {
  return {
    success,
    message,
    timestamp: new Date().toISOString(),
    data
  };
}