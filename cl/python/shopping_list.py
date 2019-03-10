shopping_list = []

def show_help():
    print("What should we pick up at the store?")
    print("""
Enter 'DONE' to stop adding items.
Enter 'HELP' for this help.
Enter 'SHOW' to see your current list.
""")


def add_to_list(item):
    shopping_list.append(item)
    print("{} Added! List has {} items.".format(item, (len(shopping_list))))

#Define a function named show_list that prints all the items in the list

def show_list():
    print("Here's your list: ")
    for item in shopping_list:
        print(item)

show_help()
while True:
    new_item = input("> ")

    if new_item == 'DONE':
        print("Thanks for shopping!")
        show_list()
        break
    elif new_item == 'SHOW':
        show_list()
        continue
    elif new_item == 'HELP':
        show_help()
        continue
    #Enable the SHOW command to show the ist. Don't forget to update the HELP documentation.
    #Hint: Make sure to run it.

    add_to_list(new_item)
