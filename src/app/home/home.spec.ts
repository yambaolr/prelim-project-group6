import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // NEW IMPORT

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Import the component and the necessary animation module for testing
      imports: [Home, BrowserAnimationsModule] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // NEW TEST: Verify the animation is defined in the component's metadata
  it('should have the contentState animation trigger defined', () => {
    // Angular stores animations metadata in the component's decorators
    const animations = (component.constructor as any).decorators[0].args[0].animations;
    expect(animations).toBeDefined();
    
    // Check for the specific trigger name
    const contentStateTrigger = animations.find((a: any) => a.name === 'contentState');
    expect(contentStateTrigger).toBeDefined();
  });

  // NEW TEST: Verify the animation state property is correctly initialized
  it('should initialize animationState to "in"', () => {
    expect(component.animationState).toBe('in');
  });
});