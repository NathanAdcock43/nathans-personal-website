import 'jquery';

declare module 'jquery' {
    interface JQuery {
        magnify(options?: any): JQuery;
    }
}
