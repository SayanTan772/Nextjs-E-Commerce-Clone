'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUser,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [num, setNum] = useState(0);
  const [display, setDisplay] = useState('none');

  function dropdown() {
    if (display === 'none') {
      setDisplay('flex');
    } else {
      setDisplay('none');
    }
  }

  const Resize = () => {
    if (window.innerWidth >= 768) {
      setDisplay('none');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', Resize);
    return () => {
      window.removeEventListener('resize', Resize);
    };
  }, []);

  let width;
  let img_width = 1200;
  let img_height = 300;
  let min = 0;
  let max = 2;

  if (window.innerWidth >= 1200) {
    width = 1200;
    img_width = 250;
    img_height = 300;
  } else if (window.innerWidth >= 768) {
    width = 720;
    img_width = 150;
    img_height = 250;
  } else {
    max = 11;
    width = 320;
    img_width = 250;
  }

  function forward() {
    if (num >= min && num < max) { // min: 0 & max: 2
      setNum(num + 1);
    }
  }

  function backward() {
    if (num > min) { // num > min
      setNum(num - 1);
    }
  }

  return (
    <main className={styles.main}>

      <nav className={styles.nav}>
        <input type="text" placeholder="Search ..." className={styles.input}></input>
        <div className={styles.text}><i>Adalene.</i></div>
        <div className={styles.login}>
          <div className={styles.user}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div style={{ color: 'rgb(188,76,42)' }}>Log In</div>
          <div style={{ color: 'rgb(188,76,42)' }}>Cart(0)</div> 
        </div>
        <Image className={styles.burger_right}
          src="/media/burger-menu-right.svg"
          alt="image not found"
          width={35}
          height={35}
          onClick={dropdown}
        />
      </nav>

      <div className={styles.menu} style={{ display: `${display}` }}>
        <ul style={{ listStyleType: "none" }}>
          <li style={{ margin: '24px 0px', fontWeight: '400', fontSize: '20px', textAlign: 'center', color: 'rgb(188, 76, 42)' }}>Shop All</li>
          <li style={{ margin: '24px 0px', fontWeight: '400', fontSize: '20px', textAlign: 'center', color: 'rgb(188, 76, 42)' }}>Our Story</li>
          <li style={{ margin: '24px 0px', fontWeight: '400', fontSize: '20px', textAlign: 'center', color: 'rgb(188, 76, 42)' }}>Our craft</li>
          <li style={{ margin: '24px 0px', fontWeight: '400', fontSize: '20px', textAlign: 'center', color: 'rgb(188, 76, 42)' }}>Gift card</li>
          <li style={{ margin: '24px 0px', fontWeight: '400', fontSize: '20px', textAlign: 'center', color: 'rgb(188, 76, 42)' }}>Contact</li>
        </ul>
      </div>

      <nav className={styles.bottom_nav}>
        <ul style={{ listStyleType: "none" }}>
          <li style={{ float:'left', margin: '12px', fontWeight: '300', fontSize: '18px' }}>Shop All</li>
          <li style={{ float:'left', margin: '12px', fontWeight: '300', fontSize: '18px' }}>Our Story</li>
          <li style={{ float:'left', margin: '12px', fontWeight: '300', fontSize: '18px' }}>Our craft</li>
          <li style={{ float:'left', margin: '12px', fontWeight: '300', fontSize: '18px' }}>Gift card</li>
          <li style={{ float:'left', margin: '12px', fontWeight: '300', fontSize: '18px' }}>Contact</li>
        </ul>
      </nav>

      <div className={styles.home}>
        <div className={styles.overlay}>
          <h1 className={styles.h1}>CUE THE COLOR</h1>
          <button className={styles.shop}>Shop the Collection</button>
        </div>
      </div>

      <div className={styles.seller}>
        <h1 className={styles.seller_h}>BEST SELLER</h1>
        <div className={styles.container}>
          <div className={styles.wrapper} style={{ transform: `translateX(-${(num) * width}px)` }}>

            { (window.innerWidth < 765) ? (
              <>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod1.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod2.jpg"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod3.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod4.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod1.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod2.jpg"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod3.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod4.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod1.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod2.jpg"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod3.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod4.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              </>
              ) : (
            <>
            <div className={styles.slide}>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod1.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod2.jpg"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod3.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod4.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod1.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod2.jpg"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod3.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod4.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod1.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod2.jpg"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod3.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.img_box}>
                <Image
                  src="/media/prod4.webp"
                  alt="image not found!"
                  width={`${img_width}`}
                  height={`${img_height}`}
                  style={{ borderRadius: '12px', marginBottom: '16px' }}
                />
                </div>
                <p className={styles.caption}>I am a product</p>
                <p className={styles.price}><i>$100</i></p>
              </div>
            </div>
            </>              
              )
            }

          </div>

          <div className={styles.arrow_right} onClick={forward}><FontAwesomeIcon icon={faChevronRight} /></div>
          <div className={styles.arrow_left} onClick={backward}><FontAwesomeIcon icon={faChevronLeft} /></div>
        </div>
        <button className={`${styles.send} ${styles.btn}`}>Shop</button>
      </div>

      <div className={styles.goods}>
        <div className={styles.left_banner}>
          <Image
            className={styles.purse}
            src="/media/purse.webp"
            alt="image not found"
            width={500}
            height={420}
          />
          <p className={styles.caption}>I am a product</p>
          <p className={styles.price}><i>$100</i></p>
        </div>
        <div className={styles.right_banner}><div className={styles.overlay}><h1 className={styles.h1_small}>MINI LEATHER GOODS</h1></div></div>
      </div>

      <div className={styles.belts}>
      <div className={styles.belt_banner}><div className={styles.overlay}><h1 className={styles.h1_small}>MINI LEATHER GOODS</h1></div></div>
        <div className={styles.belt_content}>
          <Image
            className={styles.belt}
            src="/media/belt.webp"
            alt="image not found"
            width={500}
            height={420}
          />
          <p className={styles.caption}>I am a product</p>
          <p className={styles.price}><i>$100</i></p>
        </div>
      </div>

      <div className={styles.products}>
        <div className={styles.card}>
          <div className={styles.overlay}>
            <p className={styles.sub_head}><i>Family Owned</i></p>
            <p className={styles.head}>BRAND</p>
            <p className={styles.link}>Read our Story</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.overlay}>
            <p className={styles.sub_head}><i>Hand Crafted</i></p>
            <p className={styles.head}>PRODUCTS</p>
            <p className={styles.link}>About our Leather</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.overlay}>
            <p className={styles.sub_head}><i>Created in the</i></p>
            <p className={styles.head}>USA</p>
            <p className={styles.link}>Learn our Process</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={`${styles.div} ${styles.width_ch}`}>
          <ul className={styles.list}>
            <li className={styles.item}>Shop All</li>
            <li className={styles.item}>Our Story</li>
            <li className={styles.item}>Our Craft</li>
            <li className={styles.item}>Gift card</li>
            <li className={styles.item}>Contact</li>
          </ul>

          <ul className={styles.list}>
            <li className={styles.item}>FAQ</li>
            <li className={styles.item}>Shipping & Returns</li>
            <li className={styles.item}>Store Policy</li>
            <li className={styles.item}>Payment Methods</li>
            <li className={styles.item}>Stockists</li>
          </ul>
        </div>

        <div className={`${styles.div} ${styles.block}`}>
          <ul className={styles.list}>
            <li className={styles.item}>Facebook</li>
            <li className={styles.item}>Instagram</li>
            <li className={styles.item}>Twitter</li>
            <li className={styles.item}>Pinterest</li>
          </ul>

          <div className={styles.input_container}>
            <h1>JOIN US</h1>
            <input className={styles.email} type="email" autoCorrect='off' placeholder="Email*"></input>
            <button className={styles.send}>Send</button>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>©2035 by adalene. Powered and secured by Wix</div>

      <div className={styles.message}>
        <FontAwesomeIcon icon={faComment} />
      </div>
    </main>
  )
}
