//
//  HXTabBarController.swift
//  MobileApp
//
//  Created by 移动端开发 on 2018/11/20.
//  Copyright © 2018 Facebook. All rights reserved.
//

import UIKit



@objc class HXTabBarController: UITabBarController {
  
 @objc public func ocLog()
  {
    print("oc调用swift")
  }

    override func viewDidLoad() {
        super.viewDidLoad()
      self.view.backgroundColor = UIColor.blue
      
   
      
      
      
      let btn = UIButton.init(frame: CGRect.init(x: 300, y: 100, width: 100, height: 100));
      btn.backgroundColor = UIColor.red
      
      self.view.addSubview(btn)
      
      btn.addTarget(self, action: #selector(HXTabBarController.dismiss as (HXTabBarController) -> () -> ()), for: UIControl.Event.touchUpInside)
      
  
      
    
        // Do any additional setup after loading the view.
    }
  
  @objc func dismiss(){
    let fs = HXFirstScreenViewController()
    
    HXFirstScreenViewController.ocStaticFunc("swift 调欧辰错错错")
    fs.swiftLog()
    
    
  
    
//    fs.ocStaticFunc("swift call oc static fun")
    
    

    self.dismiss(animated: true) {}
    
  }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}


