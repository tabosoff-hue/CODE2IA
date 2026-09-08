import tkinter as tk

fenetre = tk.Tk()
fenetre.title("Mon application")
fenetre.geometry("500x300")

texte = tk.Label(
    fenetre,
    text="Salut !\nCette application a été créée avec Code2App AI !",
    font=("Arial", 16)
)
texte.pack(expand=True)

fenetre.mainloop()