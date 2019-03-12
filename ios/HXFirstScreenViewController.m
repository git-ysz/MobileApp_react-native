//
//  HXFirstScreenViewController.m
//  MobileApp
//
//  Created by 移动端开发 on 2018/11/15.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HXFirstScreenViewController.h"

#import "MobileApp-Swift.h"

@interface HXFirstScreenViewController ()

@end

@implementation HXFirstScreenViewController

-(void)swiftLog {
  NSLog(@"swift调用oc");
}


- (id)swiftHello {
    NSLog(@"swift调用oc");
  
  return NULL;
}

+ (id)ocStaticFunc:(NSString *)log {
   NSLog(@"%@", log);
  
  
  
  return NULL;

}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  self.view.backgroundColor = [UIColor darkGrayColor];
  
  
  
  
  
  
  UIButton * btn = [[UIButton alloc]initWithFrame:CGRectMake(300, 100, 100, 100)];
  btn.backgroundColor = [UIColor redColor];
  [self.view addSubview:btn];
  
  [btn addTarget:self action:@selector(selectBtn) forControlEvents:UIControlEventTouchUpInside];
  
  
  
  
  
  
  

  
  
}

-(void)selectBtn {
  HXTabBarController * Tb = [[HXTabBarController alloc]init];
  
  [Tb ocLog];
  
  [self presentViewController:Tb animated:YES completion:^{
    
  }];
  
  
 

  
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
