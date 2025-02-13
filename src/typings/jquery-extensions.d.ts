import * as $ from 'jquery';

declare global {
    interface JQuery {
        customFunction(): void;
    }
}

export {};

