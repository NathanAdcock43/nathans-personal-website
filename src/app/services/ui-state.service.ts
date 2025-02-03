import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UIStateService {
    public isDeskBackground = true;
    public isCurtainVisible = false;
}