/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

//#import <React/RCTBundleURLProvider.h>
//#import <React/RCTRootView.h>

//引入首屏VC
#import "HXFirstScreenViewController.h"


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
//  NSURL *jsCodeLocation;
//
//  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
//
//  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                      moduleName:@"MobileApp"
//                                               initialProperties:nil
//                                                   launchOptions:launchOptions];
//  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:0.0f blue:1.0f alpha:1];
  
  HXFirstScreenViewController * vCon = [[HXFirstScreenViewController alloc]init];
  
  [vCon swiftHello];
  [HXFirstScreenViewController ocStaticFunc:@"111"];
  
  
  
  
  

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
//  UIViewController *rootViewController = [UIViewController new];
//  rootViewController.view = rootView;
  self.window.rootViewController = vCon;
  [self.window makeKeyAndVisible];
  return YES;
}


@end
