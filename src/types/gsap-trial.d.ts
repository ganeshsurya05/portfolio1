declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(targets: string | HTMLElement | (string | HTMLElement)[], config?: any);
    revert(): void;
    [key: string]: any;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(config?: any): ScrollSmoother;
    static refresh(force?: boolean): void;
    paused(state?: boolean): boolean | ScrollSmoother;
    refresh(): ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(target: string | number | HTMLElement, smooth?: boolean, position?: string): ScrollSmoother;
    [key: string]: any;
  }
}
