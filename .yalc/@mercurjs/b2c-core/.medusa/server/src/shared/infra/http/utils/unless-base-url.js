"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlessBaseUrl = void 0;
/**
 * Due to Medusa's `unlessPath` function bug, we need to use this function to skip middlewares for particular routes.
 * @param onPath - Regular expression to match against the base URL
 * @param middleware - The middleware function to execute
 * @param methods - Optional array of HTTP methods to match against. If not provided, matches all methods.
 */
const unlessBaseUrl = (onPath, middleware, methods) => (req, res, next) => {
    const methodMatches = !methods || methods.includes(req.method.toUpperCase());
    if (onPath.test(req.baseUrl) && methodMatches) {
        return next();
    }
    else {
        return middleware(req, res, next);
    }
};
exports.unlessBaseUrl = unlessBaseUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sZXNzLWJhc2UtdXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9pbmZyYS9odHRwL3V0aWxzL3VubGVzcy1iYXNlLXVybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQTs7Ozs7R0FLRztBQUNJLE1BQU0sYUFBYSxHQUN4QixDQUFDLE1BQWMsRUFBRSxVQUE4QixFQUFFLE9BQWtCLEVBQUUsRUFBRSxDQUN2RSxDQUFDLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxJQUF3QixFQUFFLEVBQUU7SUFDcEUsTUFBTSxhQUFhLEdBQUcsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFDNUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUM5QyxPQUFPLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ25DLENBQUM7QUFDSCxDQUFDLENBQUE7QUFUVSxRQUFBLGFBQWEsaUJBU3ZCIn0=